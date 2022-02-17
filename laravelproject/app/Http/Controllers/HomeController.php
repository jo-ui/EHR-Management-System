<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
class HomeController extends Controller
{
    public function index(){
        return view('home');
    }
    public function welcome(){
        return view('welcome');
    }
    public function upload(Request $request){
        $student = new student;
        $student->name=$request->name;
        $student->email=$request->email;
        $image=$request->file;
        if($image){
            $imagename=time().'.'.$image->
            getClientOriginalExtension();
            $request->file->move('student',$imagename);
            $student->image=$imagename;
        }
        $student->save();
        return redirect()->back();
    }

    public function view(){
        $data = Student::all();
        return view('display',compact('data'));
    }
    public function delete($id){
        $data=student::find($id);
        $data->delete();
        return redirect()->back();
    }
    public function search(request $request){
        $search = $request->search;
        $data= student::where('name','like','%'.$search.'%'
        )->orWhere('email','like','%'.$search.'%')->get();
        return view('display',compact('data'));
    }
}

