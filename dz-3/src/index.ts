enum ResultStatus {
  failed = 400,
  success = 200,
}

interface Data {
  sum: number;
  from: number;
  to: number;
}

interface DataResponse extends Data {
  databaseId: number;
}

interface DataResponseError {
  errorMessage: string;
  errorCode: number;
}

interface ApiRequest {
  data: Data;
}

interface ApiResponse {
  status: ResultStatus.success;
  data: DataResponse;
}

interface ResponseFail {
  status: ResultStatus.failed;
  data: DataResponseError;
}
