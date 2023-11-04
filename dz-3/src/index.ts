enum ResultStatus {
  failed = 400,
  success = 200,
}

type Data = {
  sum: number;
  from: number;
  to: number;
  databaseId?: number;
};

type DataFailedRequest = {
  errorMessage: string;
  errorCode: number;
};

interface IData {
  data: Data | DataFailedRequest;
  status?: ResultStatus;
}

class ApiRequest implements IData {
  data: Data;
  constructor(data: Data) {
    this.data = data;
  }
}

class ApiResponse implements IData {
  status: ResultStatus;
  data: Data | DataFailedRequest;

  constructor(status: ResultStatus, data: Data | DataFailedRequest) {
    this.data = data;
    this.status = status;
  }
}
