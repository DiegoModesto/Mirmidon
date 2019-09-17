const checked = (value, options) => {
  if (value !== true) {
    return options.message || 'precisa ser selecionado';
  }
};

export default {
  checked
};
