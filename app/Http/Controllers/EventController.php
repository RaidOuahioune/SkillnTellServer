<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Models\Events;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    function getUsers()
    {
        return $users = DB::table('users')
            ->select('id', 'first_name', 'last_name', DB::raw("CONCAT(first_name, ' ', last_name) as full_name"), 'is_admin', 'username')
            ->get()->toArray();

    }
    function getUsersAdmins()
    {
        return $admins = DB::table('users')
            ->where('is_admin', true)->select('id', 'first_name', 'last_name', DB::raw("CONCAT(first_name, ' ', last_name) as full_name"), 'is_admin', 'username')
            ->get()->toArray();

    }
}
