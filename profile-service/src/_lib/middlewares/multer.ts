import multer from 'multer';
import path from 'path';


// Set storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(req,file);
        
        cb(null, '../../../uploads'); // Ensure the 'uploads' directory exists
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

export const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        console.log("===========================");
        
        checkFileType(file, cb);
    }
});

// Check file type
function checkFileType(file: Express.Multer.File, cb: multer.FileFilterCallback) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Images only!'));
    }
}
