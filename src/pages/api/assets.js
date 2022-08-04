/* eslint-disable consistent-return */

export default function handler(
  req,
  res
) {
  // eslint-disable-next-line no-underscore-dangle
  const { owner, offset } = req.query;
  if (!owner) return res.status(200).json({ error: 'owner must be required' });
  fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${owner}&limit=20&offset=${offset || '15'}`)
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
