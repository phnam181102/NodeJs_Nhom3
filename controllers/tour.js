const Tour = require("../models/tour.model");

// View

const viewListTour = async(req, res) => {
    const danhSachTour = await Tour.find();
    res.render("tour", {
        title: "Tour du lịch cao cấp",
        span: "Các tour cao cấp chọn lọc",
        tours: danhSachTour,
    });
};

const viewQLTour = async(req, res) => {
    const danhSachTour = await Tour.find();
    res.render("quanly-tour", {
        title: "Quản lý Tour",
        tours: danhSachTour,
    });
};
const viewDetailsTour = async(req, res, next) => {
    const tour = Tour.findOne({ slug: req.params.slug })
        .then((tour) => {
            res.render("show", {
                tenTour: tour.tenTour,
                thongtinTour: tour.thongtinTour,
                giaTour: tour.giaTour,
                hinhanhTour: tour.hinhanhTour,
            });
        })

    .catch(next);
};
const viewAddTour = async(req, res) => {
    res.render("add-tour", {
        title: "Thêm một tour mới",
        tenTour: "",
        thongtinTour: "",
        giaTour: "",
        hinhanhTour: "",
        slug: "",
    });
};
const viewUpdateTour = async(req, res) => {
    const chiTietTour = await Tour.findOne({ _id: req.params.id });
    res.render("update-tour", {
        title: "Sửa thông tin Tour",
        _id: chiTietTour._id,
        tenTour: chiTietTour.tenTour,
        thongtinTour: chiTietTour.thongtinTour,
        giaTour: chiTietTour.giaTour,
        hinhanhTour: chiTietTour.hinhanhTour,
    });
};
// DELETE USER
const viewDeleteTour = async(req, res, next) => {
    Tour.remove({ _id: req.params.id })
        .then(() => {
            res.redirect("/tour/quanly-tour");
        })
        .catch(next);
};

// API
const apiListTour = async(req, res) => {};
const apiAddTour = async(req, res) => {
    console.log("Data", req.body);
    const newTour = new Tour(req.body);
    await newTour.save();
    return res.redirect("/tour");
};
const apiUpdateTour = async(req, res) => {
    await Tour.findByIdAndUpdate(req.params.id, req.body);
    return res.redirect("/tour/quanly-tour");
};
const apiDeleteTour = async(req, res) => {
    await Tour.findByIdAndDelete(req.params.id, req.body);
    return res.redirect("/tour/quanly-tour");
};
const viewfindTour = async(req, res, next) => {
    let searchTour = req.body.searchTerm;
    let tour = await Tour.find({
            $text: { $search: searchTour, $diacriticSensitive: true },
        })
        .then((tour) => {
            res.render("search", {
                title: "Search Tour",
                tours: tour,
            });
        })
        .catch(next);
};

module.exports = {
    viewListTour,
    viewQLTour,
    viewDetailsTour,
    viewAddTour,
    viewUpdateTour,
    viewDeleteTour,
    apiListTour,
    apiAddTour,
    apiUpdateTour,
    apiDeleteTour,
    viewfindTour,
};