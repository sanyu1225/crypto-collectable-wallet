/* eslint-disable consistent-return */
export default function handler(
  req,
  res
) {
  // eslint-disable-next-line no-underscore-dangle
  const { contract, id } = req.query;
  if (!contract || !id) return res.status(200).json({ error: 'contract and id must be required' });
  fetch(`https://testnets-api.opensea.io/api/v1/asset/${contract}/${id}/`)
    .then((response) => {
      if (response.status !== 200) {
        return { error: response };
      }
      return response.json();
    })
    .then((json) => {
      res.status(200).json(json);
    });
}
