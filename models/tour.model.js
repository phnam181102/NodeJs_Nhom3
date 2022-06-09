const mongoose = require("mongoose");

const TourSchema = mongoose.Schema({
    hinhanhTour: {
        type: String,
        require: true,
    },
    tenTour: {
        type: String,
        required: true,
    },
    thongtinTour: {
        type: String,
        require: true,
    },
    giaTour: {
        type: Number,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
});

/*
Sau khi khởi tạo các Schemas chúng ta sẽ tiến hành "nhét" chúng vào một Model. Model là một lớp giúp xây dựng các documents, nó là sẽ xây dựng các documents từ các Schema được chỉ định trước đó. Các Model chịu trách nhiệm tạo và đọc các document từ cơ sở dữ liệu MongoDB.
 */
TourSchema.index({ tenTour: "text", thongtinTour: "text" });
const Tour = mongoose.model("Tour", TourSchema);
module.exports = Tour;