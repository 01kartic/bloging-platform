"use client";

import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MagnifyingGlass, Bell, CaretDown } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

function Dashboard() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [token, setToken] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");

        console.log(storedEmail);
        if (storedEmail !== null) {
            fetch(`/api/users?email=${storedEmail}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setName(data.name);
                    setEmail(data.email);
                    setToken(data.token);
                    setProfilePicture(data.picture);
                })
                .catch((error) => console.error(error));
        }
    }, []);

    return (
        <div>
            <div class="flex h-full">
                <div class="flex flex-col w-64 bg-white border-r">
                    <div class="flex items-center h-16 px-4">
                        <img
                            alt="Your Company"
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                            class="w-8 h-8"
                        />
                    </div>
                    <nav class="flex-1 overflow-y-auto">
                        <ul class="space-y-1 px-2">
                            <li>
                                <a
                                    href="#"
                                    class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md bg-gray-100"
                                >
                                    <svg
                                        class="mr-3 h-6 w-6 text-gray-500" /* SVG content */
                                    ></svg>
                                    Dashboard
                                </a>
                            </li>
                        </ul>
                        <div class="mt-8">
                            <h3 class="px-3 text-sm font-medium text-gray-500">Your teams</h3>
                            <ul class="mt-1 space-y-1">
                                <li>
                                    <a
                                        href="#"
                                        class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50"
                                    >
                                        <span class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                                            H
                                        </span>
                                        <span class="ml-3">Heroicons</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="flex-1">
                    <div class="flex items-center justify-between h-16 px-4 border-b">
                        <button type="button" class="text-gray-500 hover:text-gray-600">
                            <span class="sr-only">Open sidebar</span>
                            <svg class="h-6 w-6" /* SVG content */></svg>
                        </button>
                        <div class="flex-1 flex justify-between px-4">
                            <div class="flex-1 flex">
                                <form class="w-full flex md:ml-0" action="#" method="GET">
                                    <label for="search-field" class="sr-only">
                                        Search
                                    </label>
                                    <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                            <MagnifyingGlass size={20} />
                                        </div>
                                        <input
                                            id="search-field"
                                            name="search"
                                            type="search"
                                            placeholder="Search..."
                                            class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div class="ml-4 flex items-center md:ml-6">
                                <button
                                    type="button"
                                    class="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span class="sr-only">View notifications</span>
                                    <Bell size={20} />
                                </button>
                                <div class="ml-3 relative">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
                                                <img src={profilePicture} className="h-8 w-8 rounded-full" />
                                                <span>{name}</span>
                                                <CaretDown size={16} />
                                            </MenuButton>
                                        </div>

                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            <div className="py-1">
                                                <MenuItem>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                    >
                                                        Account settings
                                                    </a>
                                                </MenuItem>
                                                    <MenuItem>
                                                        <button
                                                            onClick={() => {
                                                                localStorage.removeItem("email");
                                                                window.location.href = "/login";
                                                            }}
                                                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                        >
                                                            Sign out
                                                        </button>
                                                    </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>
                    <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                        <div class="py-6">
                            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
                            </div>
                            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"></div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
