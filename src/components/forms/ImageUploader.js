import React from 'react';

import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

const ImageUploader = React.forwardRef(({ image, handleChangeImage }, ref) => (
  <Form.Group controlId="image" className="mb-3 p-2">
    {image && <Image fluid src={image} rounded />}
    <Form.Label className='d-block'>Upload a new image.</Form.Label>
    <Form.File accept="image/*" onChange={handleChangeImage} ref={ref} />
  </Form.Group>
));

export default ImageUploader;
