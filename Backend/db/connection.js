

const connectDB=(url,dbname)=>{
  mongoose.connect(url+dbname)
  console.log("connected to db successfully");
}


export default connectDB
