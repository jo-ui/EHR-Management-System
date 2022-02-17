<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>display data from database</h1>
    <form align="center" method="GET" action="{{url('search')}}">
        <input type="search" name="search" placeholder="search">
        <input type="submit" value="search">
    </form><br>
    <table border="1px" align="center">
        <tr>
            <td>Student Name</td>
            <td>Email</td>
            <td>Image</td>
            <td>Delete</td>
        </tr>
        @foreach ($data as $student)
        <tr>
            <td>{{$student->name}}</td>
            <td>{{$student->email}}</td>
            <td>
                <img height="150" width="150" src="student/{{$student->image}}" />
            </td>
            <td>
                <a href="{{url('delete',$student->id)}}">Delete</a>
            </td>
        </tr>
        @endforeach
    </table>

</body>
</html>