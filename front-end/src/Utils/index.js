const formatData = (data) => {
  const result = data.split('T');
  const separaData = result[0].split('-');
  return `${separaData[2]}/${separaData[1]}/${separaData[0]}`;
};

export default formatData;
