from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes


from .models import Fish
from .serializers import FishSerializer
from django.shortcuts import get_object_or_404

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


# set up for admin and only logged in users can access their own tanks
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_fish(request):
    fish = Fish.objects.all()
    serializer = FishSerializer(fish, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_fish(request):
    print(
        'User ', f"{request.user.id} {request.user.username}")
    if request.method == 'POST':
        serializer = FishSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        fish = Fish.objects.filter(user_id=request.user.id)
        serializer = FishSerializer(fish, many=True)
        return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def fish_detail(request, pk):
    fish = get_object_or_404(Fish, pk=pk)
    if request.method == 'GET':
        serializer = FishSerializer(fish)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = FishSerializer(fish, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        fish.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Create your views here.
