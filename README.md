# Game Explorer

I built this project to train myself on Vue.js 3 (Composition API) with Pinia, and to deepen my skills in these technologies.

Currently, you can only run this project locally. IGDB has a complex CORS setup, and to use it in production, we need to create a stack with AWS based on the CloudFormation stacks proposed by IGDB. I haven't invested time in this yet.

## Documentation

To get started, refer to the [IGDB Documentation](https://api-docs.igdb.com/).

Follow the documentation to obtain your `CLIENT_ID` and `CLIENT_SECRET` to get a `TWITCH_ACCESS_TOKEN`. I used Postman to obtain my access token.

## Installation

Clone this repository:

```bash
git clone https://github.com/notREKASH/game-explorer.git
cd game-explorer
```

Install dependencies:

```bash
npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file located at the root of the project:

`VITE_TWITCH_CLIENT_ID=your_twitch_client_id`
`VITE_TWITCH_ACCESS_TOKEN=your_twitch_access_token`

Replace `your_twitch_client_id` and `your_twitch_access_token` with your own values.

## Generate Twitch Access Token

To generate your `TWITCH_ACCESS_TOKEN`, follow these steps:

### Using Postman

1. Open Postman and create a new POST request.
2. Set the URL to https://id.twitch.tv/oauth2/token.
3. In the `Body` tab, select `x-www-form-urlencoded`and add the following parameters:

- `client_id`: Your Twitch Client ID
- `client_secret`: Your Twitch Client Secret
- `grant_type`: client_credentials

4. Click Send to make the request.
5. Copy the `access_token`from the response and add it to your `.env` file as `VITE_TWITCH_ACCESS_TOKEN`.

### Using cURL

Alternatively, you can use cURL to generate the access token. Run the following command in your terminal, replacing your_twitch_client_id and your_twitch_client_secret with your actual values:

```bash
curl -X POST "https://id.twitch.tv/oauth2/token" \
-d "client_id=your_twitch_client_id" \
-d "client_secret=your_twitch_client_secret" \
-d "grant_type=client_credentials"
```

Copy the `access_token` from the response and add it to your `.env` file as `VITE_TWITCH_ACCESS_TOKEN`.

## Run the project

To start the project locally, execute:

```bash
npm run dev
```

Open your browser at http://localhost:5173.

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.
