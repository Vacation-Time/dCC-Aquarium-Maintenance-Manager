from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Tank
from .serializers import TankSerializer
from django.shortcuts import get_object_or_404

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


# set up for admin and only logged in users can access their own tanks
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_tanks(request):
    tank = Tank.objects.all()
    serializer = TankSerializer(tank, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_tanks(request):
    print(
        'User ', f"{request.user.id} {request.user.username}")
    if request.method == 'POST':
        serializer = TankSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        tank = Tank.objects.filter(user_id=request.user.id)
        serializer = TankSerializer(tank, many=True)
        return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def tank_detail(request, pk):
    tank = get_object_or_404(Tank, pk=pk)
    if request.method == 'GET':
        serializer = TankSerializer(tank)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = TankSerializer(tank, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        tank.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# TODO: write a view function "tank_details"
# this will take a primary key for the tank and get that specific tank
# refer to the Products API project for an example of how a detail function is set up
# remember to also add a URL route for this view function
#TODO: Test in Postman

# Create your views here.
