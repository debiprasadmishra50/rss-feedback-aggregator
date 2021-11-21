const RssLink = require("../models/RssModel");
const catchAsync = require("./../utils/catchAsync");

exports.find = catchAsync(async (req, res, next) => {
    let filter = {};

    if (req.params.slug) filter.slug = req.params.slug;

    const doc = await RssLink.find(filter);

    res.status(200).json({
        status: "success",
        requestTime: req.requestTime,
        results: doc.length,
        data: doc,
    });
});

exports.createOne = catchAsync(async (req, res, next) => {
    const doc = await RssLink.create(req.body);

    res.status(201).json({
        status: "success",
        data: doc,
    });
});

exports.deleteOne = catchAsync(async (req, res, next) => {
    await RssLink.deleteOne({ slug: req.params.slug });

    res.status(204).json({
        status: "success",
        data: null,
    });
});
