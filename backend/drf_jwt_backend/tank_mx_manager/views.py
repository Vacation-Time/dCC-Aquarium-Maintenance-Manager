from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import MxManager
from .serializers import MxManagerSerializer
from django.shortcuts import get_object_or_404

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


# set up for admin and only logged in users can access their own mx manager
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_mx_managers(request):
    mxManager = MxManager.objects.all()
    serializer = MxManagerSerializer(mxManager, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_mx_manager(request):
    print(
        'User ', f"{request.user.id} {request.user.username}")
    if request.method == 'POST':
        serializer = MxManagerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(mxManagerId=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        mxManager = MxManager.objects.filter(mxManagerId_id=request.user.id)
        serializer = MxManagerSerializer(mxManager, many=True)
        return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def mx_manager_detail(request, pk):
    mxManager = get_object_or_404(mxManager, pk=pk)
    if request.method == 'GET':
        serializer = MxManager(mxManager)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = MxManager(mxManager, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        mxManager.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
