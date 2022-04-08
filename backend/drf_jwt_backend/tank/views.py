from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Tank
from .serializers import TankSerializer

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


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

# Create your views here.
