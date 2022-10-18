export default async function handler(req, res) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${process.env.HARPER_API_KEY}`,
    },
    body: req.body
  };

  const url = 'https://functions-products-colbyfayock.harperdbcloud.com/products/add';

  const results = await fetch(url, requestOptions).then(r => r.json());

  res.status(200).json({
    data: {
      id: results.inserted_hashes[0]
    },
    results
  });
}