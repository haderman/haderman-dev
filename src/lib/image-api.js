const isProd = import.meta.env.PROD;

export async function genImage() {
  if (!isProd) {
    return mockData2;
  }

  try {
    const img = await callApi();
    return img;
  } catch (error) {

    return mockData1;
  }
}

async function callApi() {
  const loginRes = await fetch('https://haderman-ai.onrender.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'haderman-backend-server',
      password: 'usr_0190d662-4244-ac94-74fb-39870cf43910',
    }),
  });

  const { token } = await loginRes.json();
  console.log('token: ', token);

  const imgRes = await fetch('https://haderman-ai.onrender.com/v1/images', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { data } = await imgRes.json();
  return data[0] ?? mockData1;
}


const mockData1 = {
  revised_prompt: 'Create an abstract composition using geometric shapes like squares, triangles and circles. Make sure to use predominantly dark colors such as deep blues, rich purples, and black. Add some dynamic contrasting elements using lighter colors. The aesthetic of the image should evoke a sense of mystery and depth. Please remember to keep the textures smooth and the pattern organized, reflecting a sense of balance and harmony. The intention here is to create an image that conveys complexity within simplicity, embodying subtle and tranquil beauty.',
  url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-ElEHq3nto1yEcMV3WCKEpjIw/user-VYaC6VNokqzFHJH4ONsb7Cdu/img-uZ6VZY4qlcD8DVYMY9OwBFNm.png?st=2024-07-23T03%3A53%3A53Z&se=2024-07-23T05%3A53%3A53Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-23T00%3A23%3A12Z&ske=2024-07-24T00%3A23%3A12Z&sks=b&skv=2023-11-03&sig=hWJJBWgxEaqFow5rFzaga7C2GRPAoLJ5uMT6HRZESBk%3D'
};

const mockData2 = {
  revised_prompt: 'Create an abstract art image utilizing a palette dominated by dark shades of color. The image should be filled with a variety of geometric shapes interacting and overlapping with each other to form a unique, visually compelling composition. These shapes can vary in size, form and color but they are all tinted dark to create a moody atmosphere.',
  url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-ElEHq3nto1yEcMV3WCKEpjIw/user-VYaC6VNokqzFHJH4ONsb7Cdu/img-z1ud9NBZ9k3EDSh6ovn73aaH.png?st=2024-07-23T03%3A53%3A54Z&se=2024-07-23T05%3A53%3A54Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-23T00%3A23%3A30Z&ske=2024-07-24T00%3A23%3A30Z&sks=b&skv=2023-11-03&sig=Eck5/ZOZYXfLawudqIiM045K8Z1Y51IhmanQDd0c4y4%3D'
};

const mockData3 = {
  revised_prompt: 'Create an abstract art piece featuring an array of geometric shapes including circles, squares, triangles, and rectangles. The color scheme should be dominated by darker hues like midnight blue, deep purple, forest green, and charcoal gray. The composition should evoke a sense of intrigue and mystery.',
  url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-ElEHq3nto1yEcMV3WCKEpjIw/user-VYaC6VNokqzFHJH4ONsb7Cdu/img-478gApvCURLHVHyiWVpdM6UU.png?st=2024-07-23T03%3A53%3A54Z&se=2024-07-23T05%3A53%3A54Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-23T00%3A33%3A50Z&ske=2024-07-24T00%3A33%3A50Z&sks=b&skv=2023-11-03&sig=QzaFkR4XobMLNgvIc7CaSUH/RCkXOWBlUT87L/6LhVQ%3D'
};
