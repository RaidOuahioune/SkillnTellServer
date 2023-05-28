<?php

namespace App\Http\Controllers;

use App\Events\MessageEvent;
use App\Http\Requests\MessageRequest;
use App\Models\Message;

class MessageController extends Controller
{
    private static $messageCount = 20;
    function all(\Illuminate\Http\Request $request)
    {

        $skip = $request->query("skip");
        return Message::all()->sortByDesc("created_at")->skip($skip)->take(MessageController::$messageCount);
    }
    function addMessage(MessageRequest $request)
    {

        $data = $request->validated();
        $message = Message::create([
            "content" => $data["content"],
            "sender_id" => $data["sender_id"]
        ]);

        event(new MessageEvent($message));
        return response()->json($message);
    }
}
