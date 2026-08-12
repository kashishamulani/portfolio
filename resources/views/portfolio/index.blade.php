@extends('layouts.portfolio')

@section('content')

    {{-- 01. Hero --}}
    @include('sections.hero')

    {{-- 02. About --}}
    @include('sections.about')

    {{-- 03. Skills --}}
    @include('sections.skills')

    {{-- 04. Experience --}}
    @include('sections.experience')

    {{-- 05. Projects --}}
    @include('sections.projects')

    {{-- 06. Process --}}
    @include('sections.process')

    {{-- 07. Services --}}
    @include('sections.services')

    {{-- 08. Contact --}}
    @include('sections.contact')

    {{-- 09. Footer --}}
    @include('sections.footer')

@endsection