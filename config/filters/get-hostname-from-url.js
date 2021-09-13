const getHostnameFromUrl = (address = '') => {
  if (!address) {
    return '';
  }

  const url = new URL(address);

  return url.hostname;
};

module.exports = getHostnameFromUrl;
