const express = require('express');
const cors = require('cors');
const supabase = require('./db/connection')

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8000;


// ADD_GYM

app.post('/gym', async (req, res) => {
  const {
    name,
    image,
    description,
    banner
  } = req.body
  try {
    const { data, error } = await supabase
      .from('gym')
      .insert([{ name, image, description, banner, }])
    if (error) {
      throw error
    }
    res.status(200).json({ message: 'Gym added successfully', gym: data })
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error: error.message });
  }
});

// GET_GYM
app.get('/gym', async (req, res) => {

  try {
    const { data, error } = await supabase
      .from('gym')
      .select('*')
    if (error) {
      throw error
    }
    res.status(200).json({ message: 'Gym get successfully', gym: data })
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error: error.message });
  }
});


// GYM GET_ID

app.get('/gym/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('gym')
      .select('*')
      .eq('id', id);
    if (error) {
      throw error;
    }
    res.status(200).json({ message: 'Gym retrieved successfully', gym: data[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving gym', error: error.message });
  }
});


// GYM DELETE
app.delete('/gym/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { data, error } = await supabase
      .from('gym')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }
    return res.status(200).json({ message: 'Gym ID is deleted', gym: data })
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving gym', error: error.message });
  }
})


// GYM UPDATE

app.put('/gym/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, banner, image } = req.body;  // Ensure banner is an array

    // Log for debugging
    console.log("Request Body:", req.body);

    const { data, error } = await supabase
      .from('gym')
      .update({ name, description, banner, image })  // Supabase should handle array natively if column type is text[]
      .eq('id', id);

    if (error) {
      throw error;
    }

    return res.status(200).json({ message: 'Gym updated successfully', gym: data });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating gym', error: error.message });
  }
});


// ADD_STORE
app.post('/store', async (req, res) => {
  const {
    name,
    image,
    rating,
    price
  } = req.body
  try {
    const { data, error } = await supabase
      .from('store')
      .insert([{ name, image, rating, price, }])
    if (error) {
      throw error
    }
    res.status(200).json({ message: 'Store added successfully', gym: data })
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error: error.message });
  }
});


// GET STORE
app.get('/store', async (req, res) => {

  try {
    const { data, error } = await supabase
      .from('store')
      .select('*')
    if (error) {
      throw error
    }
    res.status(200).json({ message: 'Store get successfully', store: data })
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error: error.message });
  }
});



// STORE GET_ID
app.get('/store/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('store')
      .select('*')
      .eq('id', id);
    if (error) {
      throw error;
    }
    res.status(200).json({ message: 'Store retrieved successfully', store: data[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving gym', error: error.message });
  }
});


// STORE DELETE
app.delete('/store/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { data, error } = await supabase
      .from('store')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }
    return res.status(200).json({ message: 'Store ID is deleted', store: data })
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving store', error: error.message });
  }
})

// STORE UPDATE
app.put('/store/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, rating, price, banner } = req.body;
    console.log(req.body);

    const { data, error } = await supabase
      .from('store')
      .update({ name, image, rating, price, banner })
      .eq('id', id);

    if (error) {
      throw error;
    }
    return res.status(200).json({ message: 'Store updated successfully', store: data });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating store', error: error.message });
  }
});



app.get('/variety/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('variety')
      .select('*')
      .eq('store', id);
    if (error) {
      throw error;
    }
    res.status(200).json({ message: 'Variety retrieved successfully', variety: data });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving ', error: error.message });
  }
});

app.put('/variety/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, store, price, image, banner } = req.body;

    // Log for debugging
    console.log("Request Body:", req.body);

    const { data, error } = await supabase
      .from('variety')
      .update({ name, store, price, image, banner })
      .eq('id', id);

    if (error) {
      throw error;
    }

    return res.status(200).json({ message: 'Variety updated successfully', variety: data });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating variety', error: error.message });
  }
});


app.post('/variety', async (req, res) => {
  const {
    name,
    store,
    price,
    image

  } = req.body
  try {
    const { data, error } = await supabase
      .from('variety')
      .insert([{ name, store, price, image }])
    if (error) {
      throw error
    }
    res.status(200).json({ message: 'Variety added successfully', variety: data })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error adding variety', error: error.message });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
