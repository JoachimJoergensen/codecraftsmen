<template>
    <header class="page-header">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a href="#" class="navbar-item navbar-brand__site-logo">Codecraftsmen.</a>

                    <span class="navbar-burger burger" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>

                </div>

                <div class="navbar-menu" id="navMenu">
                    <div class="navbar-end">
                        <router-link to="/" class="navbar-item">Home</router-link>
                        <router-link to="/services" class="navbar-item">Services</router-link>
                        <router-link to="/about" class="navbar-item">About</router-link>
                        <router-link to="/contact" class="navbar-item">Contact</router-link>
                    </div>
                </div>
                
            </div>
        </nav>
    </header>
</template>
