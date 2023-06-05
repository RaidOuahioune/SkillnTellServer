<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Models\Events;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class EventController extends Controller
{
    function all()
    {


        return Events::all()->sortByDesc('date');

    }
    function addEvent(EventRequest $request)
    {

        $data = $request->validated();
        $imagePath = $request->file('event_image')->store('public/Events');
        $imageUrl = Storage::url($imagePath);
        $event = Events::create([
            "title" => $data["title"],
            "description" => $data["description"],
            "tages" => $data["tages"],
            "date" => $data["date"],
            "location" => $data["location"],
            "monitor_id" => $data["monitor_id"],
            "responsible_id" => $data["responsible_id"],
            "event_image" => $data["event_image"],
            "event_path" => $imageUrl
        ]);
        return response($event, 200);

    }

    function deleteEvent(Request $request, $id)
    {
        $event = Events::findOrFail($id);
        $event->delete();
        return response("Event deleted successfully", 200);

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
