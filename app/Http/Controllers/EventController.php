<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Models\Events;
use Illuminate\Http\Request;

class EventController extends Controller
{
    function all()
    {

        return $events = Events::leftjoin('event_images', 'events.id', '=', 'event_images.event_id')
        ->orderByDesc('date')
        ->select('events.*', 'event_images.*')
        ->get()->toArray();

    }
    function addEvent(EventRequest $request)
    {

        $data = $request->validated();
        $event = Events::create([
            "title" => $data["title"],
            "description" => $data["description"],
            "tags" => $data["tags"],
            "date" => $data["date"],
            "location" => $data["location"],
            "monitor_id" => $data["monitor_id"],
            "responsible_id" => $data["responsible_id"]
        ]);
        return response('Event created successfully', 200);
    }
}
