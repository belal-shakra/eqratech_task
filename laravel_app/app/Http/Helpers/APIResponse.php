<?php

namespace App\Http\Helpers;


class APIResponse {


  public static function api_response($code = 200, $message = null, $data = []){

    $response = [
      'status' => $code,
      'message' => $message,
      'data' => $data,
    ];

    return response()->json($response, $code);
  }
}