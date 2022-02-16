module.exports = {
    INTERNAL_SERVER_ERROR: {
      status: 500,
      body: {
        code: -1,
        message: 'Internal server error.'
      }
    },
    NOT_FOUND: {
      status: 404,
      body: {
        code: -2,
        message: 'Not found.'
      }
    },
    UNAUTHORIZED: {
      status: 401,
      body: {
        code: -3,
        message: 'Unauthorized'
      }
    },
    INVALID_CREDENTIALS: {
      status: 401,
      body: {
        code: -4,
        message: 'Invalid username or password.'
      }
    },
    INVALID_TOKEN: {
      status: 400,
      body: {
        code: -6,
        message: 'Invalid token.'
      }
    },
    ENDPOINT_NOT_FOUND: {
      status: 404,
      body: {
        code: -8,
        message: 'Endpoint not found.'
      }
    },
    ALREADY_EXISTS: {
      status: 409,
      body: {
        code: -9,
        message: 'Data already exists.'
      }
    },
    ALREADY_VERIFIED: {
      status: 409,
      body: {
        code: -9,
        message: ' Email already verified.'
      }
    },
    BAD_REQUEST: {
      status: 400,
      body: {
        code: -10,
        message: 'Bad request.'
      }
    },
    VALIDATION_ERROR: {
      status: 422,
      body: {
        code: -11,
        message: 'Missing or invalid inputs.'
      }
    }
  };