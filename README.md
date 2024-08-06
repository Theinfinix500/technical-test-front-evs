
# Technical Test Front EVS

This project is a frontend application for the technical test at EVS.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow these steps to get the application up and running using Docker Compose.

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Theinfinix500/technical-test-front-evs.git
cd technical-test-front-evs
git checkout feat/technical-test
```

### Build and Run the Application

Use Docker Compose to build and run the application:

```bash
docker compose up
```

This command will build the Docker image and start the application in a container.

### Access the Application

Once the containers are up and running, you can access the application in your web browser at:

```
http://localhost
```

## Stopping the Application

To stop the application and remove the containers, use the following command:

```bash
docker compose down
```

## Troubleshooting

If you encounter any issues while running the application, here are a few common troubleshooting steps:

- Ensure Docker and Docker Compose are properly installed and running.
- Check for any error messages in the terminal output and resolve any issues as indicated.
- Ensure no other application is using the same port (3000) on your machine.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
