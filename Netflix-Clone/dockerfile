FROM nginx:alpine

# Copy the build output from the previous stage
COPY  /build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]