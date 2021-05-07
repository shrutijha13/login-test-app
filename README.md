# Welcome to the Login Test App

To run the application, please run the following command:
```
./startup.sh
```

This command will return a container id. Please copy this id to the clipboard.

Check that the container is up and running with the following command before accessing the application: 
```
docker logs -f <container-id>
```

Wait for the following output (or similar, depending on your environment):
```
You can now view login_test_app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.17.0.2:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

Once the logs show the application is available, please access the following URL: http://localhost:3000

# How to use the application

- Click on the Login button
- Select the "Continue With Google" option
- Login using Google SSO
- You should be able to see the Happy Cat image, the last login date and time and current date and time in UTC format in a human-readable format. 