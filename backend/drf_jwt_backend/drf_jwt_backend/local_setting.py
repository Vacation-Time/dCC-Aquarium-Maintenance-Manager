# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-%faj1(-#3o5d68s1u4veo45v%vy#y8q2s*5rlbafj+1%imy$(r'


# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'aquarium_manager',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': '1John4:4',

    }
}
