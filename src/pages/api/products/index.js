export default async function handler(req, res) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${process.env.HARPER_API_KEY}`,
    }
  };

  const url = 'https://functions-products-colbyfayock.harperdbcloud.com/products';

  const results = await fetch(url, requestOptions).then(r => r.json());

  res.status(200).json({
    products: results
  });
}