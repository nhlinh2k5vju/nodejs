//const express = require("express");
import express from "express";
const app = express();

const port = 8080;

app.get("/", (req, res) => {
    res.send("BBBBBBBBBBBBB")
})

app.listen(8080, ()=> {
    console.log(`Dep trai nhat the gioi: ${port}`)
})