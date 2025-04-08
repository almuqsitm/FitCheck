# Assigment 2
1) ![Component Diagram](./csc456part1.png)

Here once the user installs the Chrome Extension, they will be redirected to our Vercel Hosted webpage where they will be prompted to login/register. Once successful, after validation with the Supabase backend, they will be able to scrape order history in Amazon for example and then review the products via Chrome Extension. This information will be in the Supabase Database as well but will also be sent to the Sentiment Analysis Model to give some sentiments of user styles and products. After that, we will use an LLM engine to give recommendations in the Chrome Extension popup.


2) ![ER Diagram](./csc456part2.png)
My Part 2

3) ![Sequence Diagram](./csc456part3.png)

It starts with the user creating an account and then the Chrome Extension will scrape order information from Amazon as an example. Then review items will happen where user will give review from 1-5 starts with other data and then we will validate this data. Once successful, our backend will send a sentiment analysis which will be used to send recommendations. This is what is needed for the Chrome Extension feature.

