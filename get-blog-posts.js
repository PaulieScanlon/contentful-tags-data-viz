require('dotenv').config();
const data = require('./data.json');

const contentful = require('contentful-management');
const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_PERSONAL_ACCESS_TOKEN,
});

const spaceId = process.env.CONTENTFUL_SPACE_ID;

client
  .getSpace(spaceId)
  .then((space) => {
    space
      .getEnvironment('master')
      .then((environment) => {
        data.forEach(async (post, index) => {
          const { type, title, tags, date, url, publication, author, logo } = post;
          console.log('creating post ', index);
          setTimeout(async () => {
            await environment.createEntry('blogPost', {
              fields: {
                type: { 'en-US': type },
                title: { 'en-US': title },
                tags: { 'en-US': tags },
                date: { 'en-US': date },
                url: { 'en-US': url },
                publication: { 'en-US': publication },
                author: { 'en-US': author },
                logo: { 'en-US': logo },
              },
            });
          }, index * 10000); // 30 seconds delay between each iteration
        });
      })
      .catch((error) => {
        console.error('Error getting environment:', error);
      });
  })
  .catch((error) => {
    console.error('Error getting space:', error);
  });

// client.getSpace(spaceId).then((space) => {
//   space.getEnvironment('master').then((environment) => {
//     data.forEach(async (post) => {
//       const { type, title, tags, date, url, publication, author, logo } = post;

//       await environment.createEntry('blogPost', {
//         fields: {
//           type: { 'en-US': type },
//           title: { 'en-US': title },
//           tags: { 'en-US': tags },
//           date: { 'en-US': date },
//           url: { 'en-US': url },
//           publication: { 'en-US': publication },
//           author: { 'en-US': author },
//           logo: {
//             'en-US': logo,
//           },
//         },
//       });
//     });
//   });
// });
