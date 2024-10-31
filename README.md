# Random Quote Machine
This project is a simple, interactive Random Quote Machine created with Vue.js and TypeScript. It fetches quotes from an online source and displays them with random styling. Users can view, share, copy, and interact with quotes in various ways.

## Features
- **Random Quotes:** Generates random quotes from a list.
- **Quote History:** Keeps track of viewed quotes during the session.
- **Shareable:** Allows sharing quotes on Twitter, Telegram, and Facebook.
- **Copy to Clipboard:** Copies the selected quote directly to the clipboard.
- **Dynamic Styling:** Applies a random color scheme for each new quote.
- **Error Handling:** Displays an error message if the quote fetch fails.

This application is hosted on Vercel. You can view it live here  [DEMO](https://random-quote-vue-three.vercel.app/). 

## Installation
### Clone the repository:

```bash
Копировать код
git clone https://github.com/vasyl-pavlenko/huawei-tt.git
cd huawei-tt
```
### Install dependencies:

```bash
npm install
```
### Run the application:

```bash
npm run dev
```
Open the app in your browser at http://localhost:5173.

## Usage
1. Click New Quote to fetch a new quote with random styles.
2. Share quotes directly on Twitter, Telegram, or Facebook by clicking the respective buttons.
3. View previously shown quotes in the Quote History section.
4. Click Copy next to a history quote to copy it to your clipboard.

### Technologies Used
- **Vue 3** with TypeScript for a robust structure.
- **Vite** as a fast, modern build tool.
- **FontAwesome** for social media icons.
- **Session Storage** to preserve quote history across page reloads.

### Project Structure
##### Main Components:
- **QuoteBox:** Displays the quote and author.
- **HistoryList:** Displays the quote history with copy functionality.
- **Styles:** Scoped CSS for styling individual components.

### Happy coding
I hope you enjoy exploring and contributing to my project. If you have any questions or feedback, feel free to reach out. Let's build amazing experiences together!


