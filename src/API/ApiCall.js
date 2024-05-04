import axios from "axios";
import { loginData } from "../Redux/userRedux";
import { userRequest } from "../Components/RequestMethod";
// import {userRequest} from

//-------------------------ADMIN------------------------------
//to post/add admin-user details
export const SignupData = async (data) => {
    //    const newType ={...data, type:'user'}
    //     console.log('newtype',newType);
    console.log('data', data);
    try {
        const res = await axios.post('http://localhost:7002/api/adminpost', data)
        console.log('check admin data', res.status);
    } catch (error) {
        console.log(error);
    }
}



//to get admin-user login details
export const LoginDatass = async (data, dispatch) => {
    console.log('login data', data);
    try {
        const res = await axios.post('http://localhost:7002/api/adminlogin', data)
        console.log(res);
        dispatch(loginData(res.data))
        console.log("*************", loginData);
    } catch (error) {
        console.log(error);
    }
}

//to get admin profile
export const GetAdminData = async (id) => {
    console.log('prof idddd', id);
    try {
        const res = await axios.get(`http://localhost:7002/api/getadmindetails/${id}`)
        console.log('dataa getuser', res.data);
        return res.data
    } catch (error) {
        console.log(error);
        throw error;
    }
}

//to update admin page
export const UpdateAdminDatas = async (data, id) => {
    console.log("datttaa", data);
    // const datas = data.data
    // const id = data.id

    try {
        const response = await axios.put(`http://localhost:7002/api/adminupdate?id=${id}`, data
            //    , {
            //         firstname: id.firstname,
            //         email: id.email,
            //         image: id.image,
            //     }
        );
        console.log('updateAdmin', response.data);
        return response.data;
    } catch (error) {
        console.log('Error updating admin:', error);
        throw error; // Rethrow the error to be handled by the calling function
    }
}



//------------------------------USER---------------------------
//to get ecom-users user-details
export const userss = async (id) => {
    console.log("data", id)
    try {
        const res = await axios.get(`http://localhost:7002/api/Ecomgetmethod`, id)
        console.log("yo ansr", res.data);
        return res
    } catch (error) {
        console.log(error);
    }
}


//to delete user 
export const DeleteUserIdData = async (id) => {
    console.log('user id', id);
    try {
        const res = await axios.delete(`http://localhost:7002/api/Ecomdelete/${id}`)
        console.log('delete', res);
    } catch (error) {
        console.log(error);
    }
}


//---------------------------------------PRODUCT----------------------------
//***to add product
export const products = async (pro) => {
    console.log("dattttaaaa", pro);
    try {
        const productData = await axios.post("http://localhost:7002/api/addproduct", pro)
        console.log("**", productData);
    } catch (err) {
        console.log(err);
    }
}


//****to view productdetails
export const productView = async (id) => {
    console.log("product-data", id);
    try {
        const res = await axios.get('http://localhost:7002/api/viewproduct', id)
        console.log('getproduct', res);
        return res
    } catch (error) {
        console.log(error);
    }
}







//****to delete product
export const productDelete = async (id) => {
    console.log('product id', id);
    try {
        const res = await axios.delete(`http://localhost:7002/api/removeproduct/${id}`)
        console.log('delet product', res);
    } catch (err) {
        console.log(err);
    }
}

//****to update product details
export const updateProduct = async (updateval) => {
    console.log('update id?', updateval);
    try {
        const res = await axios.put(`http://localhost:7002/api/updateproduct?id=${updateval.id}`, updateval.formdata)
        //     category: updateval.category,
        //     title: updateval.title,
        //     item: updateval.item,
        //     stock: updateval.stock,
        //     description: updateval.description,
        //     mrp: updateval.mrp,
        //     price: updateval.price,
        //     image: updateval.image.name,
        // })
        console.log('upp', res);
        return res
    } catch (error) {
        console.log('oooo', error);
    }
}

//*** to view product by id
export const fetchProductById = async (id) => {
    console.log('fetchhhh', id);
    try {
        const response = await axios.get(`http://localhost:7002/api/viewproductTwo/${id} `);
        console.log('Fetch product response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};

//view-page
export const viewDetails = async (id) => {
    console.log('idddd00000', id);
    try {
        const ress = await axios.get(`http://localhost:7002/api/geItemss/${id}`);
        console.log('detailsss', ress.data);
        return ress;
    } catch (err) {
        console.log(err);
    }
};


//----------------------CART PAGE STARTS HERE-------------------------
//to post cart
export const CartAddTo = async (data) => {
    console.log('cartapidata', data);
    try {
        const res = await axios.post('http://localhost:7002/api/postcart', data)
        console.log('jjj', res.data);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

//to get cart
export const CartGetTo = async (id) => {
    console.log('cartget', id);
    try {
        const res = await axios.get(`http://localhost:7002/api/getcart/${id}`)
        console.log('ggg', res.data);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

//to delete cart
export const CartDeleteTo = async (id) => {
    console.log('delete', id);
    try {
        const res = await axios.delete(`http://localhost:7002/api/deletecart/${id}`)
        console.log('delete cart', res);
    } catch (error) {
        console.log(error);
    }
}

//for quantity
export const QuantityUpdate = async (data) => {
    console.log("data and id", data);
    const Quantity = data.quantityState
    console.log(Quantity);
    try {
        const res = await axios.put(`http://localhost:7002/api/updatequantity/${data.id}`, { Quantity })
        return res;
    }
    catch (error) {
        console.log(error);
    }
}

// -----------------------Buy Now User Dataas -------------------------

//post user data(orderd)
export const postUserOrder = async (val) => {
    console.log('id-post-order', val);
    try {
        const res = await axios.post('http://localhost:7002/order/postOrderUserData', val)
        console.log('id-user-post', res.data);
        return { orderData: res.data }
    } catch (error) {
        console.log(error);
    }
}

//get user data(ordered)
export const getUserOrder = async (val) => {
    console.log('id-user-oreder', val);
    try {
        const res = await axios.get(`http://localhost:7002/order/getOrderUserData/${val}`)
        console.log('######res', res);
        return res
    } catch (error) {
        console.log(error);
    }
}

//to update user data(ordered)
export const updateUserOrder = async (val) => {
    console.log('vallll', val);
    try {
        const res = await axios.put(`http://localhost:7002/order/updateOrderUerData/${val._id}`, val
            // {
            //     address: val.address,
            //     pincode: val.pincode,
            //     city: val.city,
            //     phone: val.phone
            // }
        )
        console.log('upppppp', res);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


//--------------------------Buynow Post Dataas------------------
//buynow data post 
export const postBuyOrder = async (val) => {
    console.log('vaalll', val);
    try {
        const res = await axios.post('http://localhost:7002/buy/buypost', val)
        console.log('postbuyyy', res.data);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

//buynow data get
export const getBuyOrder = async (data) => {
    console.log('iiiiiiid', data);
    try {
        const res = await axios.get(`http://localhost:7002/buy/buyget/${data._id}`)
        console.log('@res', res);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const getOrderDetails = async (id) => {
    console.log("3333333", id);

    try {
        const resp = await axios.get(`http://localhost:7002/buy/buydataget/${id}`)
        console.log("11111111111", resp.data);
        return resp
    } catch (err) {
        console.log(err);

    }
}
// ------------------------post order confirm----------------------------

export const postOrderDatas = async (data) => {
    console.log("@@@@", data);
    const userData = data.userData
    console.log("usererrrrrr", userData);
    const orderId = data.orderId
    const item = data.items
    const datas = { userData, item }
    try {

        const res = await axios.post('http://localhost:7002/confirm/postOrderConfirm', { datas, orderId });
        return res.data; // Return response data
    } catch (error) {
        console.log(error);
        throw error; // Throw error to handle it in the caller function
    }
}

export const getOrderDatas = async () => {
    // console.log('###', data);
    try {
        const res = await axios.get('http://localhost:7002/confirm/getOrderConfirm')
        console.log('ffff', res);
        return res.data
    } catch (error) {
        console.log(error);
    }
}





