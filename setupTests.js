const getMockResult = { foo: 'qrux' };
const getMockResultObject = {
  foobar: "duffman",
  walpole: "shiv",
};

export default function resetMocks() {
  jest.resetAllMocks();

  const api = {
    clear: jest.fn(),
    get: jest.fn(arg => {
      if (arg) {
        return Promise.resolve(getMockResult);
      } else {
        return Promise.resolve(getMockResultObject);
      }
    }),
    remove: jest.fn(() => Promise.resolve()),
    set: jest.fn(() => Promise.resolve()),
  };

  window.chrome = window.browser = {
    storage: {
      local: api,
      sync: api,
    },
  };
};

resetMocks();

