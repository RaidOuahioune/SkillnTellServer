<?php

namespace App\Http\Controllers;

use App\Events\MessageEvent;
use App\Http\Requests\MessageRequest;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    function all()
    {
        return Message::all()->sortByDesc("created_at")->toArray();
    }
    function addMessage(MessageRequest $request)
    {

        $data = $request->validated();
        $message = Message::create([
            "content" => $data["content"],
            "sender_id" => $data["sender_id"]
        ]);

        event(new \App\Events\MessageEvent($data["content"], $data['sender_id']));
        return response()->json($message);
    }
}
