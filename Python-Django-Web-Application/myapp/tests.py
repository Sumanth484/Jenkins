from django.test import TestCase
from django.urls import reverse

# Create your tests here.

class HomeViewTests(TestCase):
    def test_home_view_status_code(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)

    def test_home_view_content(self):
        response = self.client.get(reverse('home'))
        self.assertContains(response, "Hello, world. This is my first Django app.")

