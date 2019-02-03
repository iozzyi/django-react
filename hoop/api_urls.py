from rest_framework import routers

from venues.views import AddressViewSet


app_name = 'api'
router = routers.DefaultRouter()
router.register(r'addresses', AddressViewSet, base_name='addresses')

urlpatterns = router.urls
