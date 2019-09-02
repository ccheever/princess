// It is stupid that I have to do this. WTF. -ccheever
declare module 'console' {
    export = typeof import("console");
}

