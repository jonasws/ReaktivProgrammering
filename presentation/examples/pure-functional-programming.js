const injectdataList = () => {
  // Side effects!!
  const data = getDataFromNetwork();
  const domElements = makeSomeDomElementsFrom(data);
  $('.selector').after(domElements);
};

const makeDomElements = (data) => {
  const d = [];
  for (const obj of data) {
    const v = createDomElement(obj);
  }
  return d;
};

const createDomElement = ({ value }) => value;

// Del opp i mindre funksjoner.
const getDataList = (data) => data.map(createDomElement);
