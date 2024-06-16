const Brand = require('../../Modals/Brand');
const port = 4000;
const brands = async (req,res) => {
        try {
            const brand = await Brand.find();
            if(!brand){
                return res.status(400).json({message:"brand is Empty"});
            }else{
                return res.status(200).json({data:brand});
            }

        } catch (error) {

            console.error('Error while fetching brand:', error);
            res.status(500).json({ success: false, error: 'Failed to get brand' });
            
        }
}
const addbrand = async (req, res) => {
    try {
        const { name, image } = req.body;
        const brand = new Brand({
           
            name: name,
            image: image,
        });
        console.log(brand);
        await brand.save();
        console.log('brand saved successfully');
        return res.json({ success: true, name: name });
    } catch (error) {
        console.error('Error while saving brand:', error);
        res.status(500).json({ success: false, error: 'Failed to save brand' });
    }
}

const uploadImage = (req,res)=>{
    res.json({
        success:1,
        imageUrl:`http://localhost:${port}/images/${req.file.filename}`
    })
};

module.exports = {
    addbrand,
    uploadImage,
    brands
}