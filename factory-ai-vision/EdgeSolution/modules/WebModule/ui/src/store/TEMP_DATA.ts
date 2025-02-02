export const INTEL_CARD_DATA = [
  {
    id: 1,
    name: 'Face Detection',
    describe:
      'Face detector based on MobileNetV2 as a backbone with a single SSD head for indoor/outdoor scenes shot by a front-facing camera. The single SSD head from 1/16 scale feature map has nine clustered prior boxes.',
    imageUrl:
      'https://raw.githubusercontent.com/openvinotoolkit/open_model_zoo/master/models/intel/face-detection-retail-0005/assets/face-detection-retail-0001.png',
    inputDescribe: 'Image, name: input, shape: 1, 3, 300, 300 in the format B, C, H, W, where:',
    createdAt: '7/3/2021',
    tags: ['face'],
    metrics: {
      AP: '84.52%',
      GFlops: '0.982',
      MParams: '1.021',
      'Source framework': 'PyTorch',
    },
    inputs: {
      B: 'batch size',
      C: 'number of channels',
      H: 'image height',
      W: 'image width',
    },
    model_id: 1,
  },
  {
    id: 2,
    name: 'Emotion Recognition',
    describe: `Fully convolutional network for recognition of five emotions ('neutral', 'happy', 'sad', 'surprise', 'anger').`,
    imageUrl:
      'https://raw.githubusercontent.com/openvinotoolkit/open_model_zoo/master/models/intel/emotions-recognition-retail-0003/assets/emotions-recognition-retail-0003.jpg',
    inputDescribe: 'Image, name: data, shape: 1, 3, 64, 64 in 1, C, H, W format, where:',
    createdAt: '7/3/2021',
    tags: ['neutral', 'happy', 'sad', 'surprise', 'anger'],
    metrics: {
      'Input face orientation': 'Frontal',
      'Rotation in-plane': '±15˚',
      'Rotation out-of-plane': 'Yaw: ±15˚ / Pitch: ±15˚',
      'Min object width': '64 pixels',
      GFlops: '0.126',
      MParams: '2.483',
      'Source framework': 'Caffe*',
    },
    inputs: {
      C: 'number of channels',
      H: 'image height',
      W: 'image width',
    },
    model_id: 3,
  },
  {
    id: 3,
    name: 'Age / Gender Recognition',
    describe:
      'Fully convolutional network for simultaneous Age/Gender recognition. The network is able to recognize age of people in [18, 75] years old range, it is not applicable for children since their faces were not in the training set.',
    imageUrl:
      'https://raw.githubusercontent.com/openvinotoolkit/open_model_zoo/master/models/intel/age-gender-recognition-retail-0013/assets/age-gender-recognition-retail-0001.jpg',
    inputDescribe: 'Image, name: input, shape: 1, 3, 62, 62 in 1, C, H, W format, where:',
    createdAt: '7/3/2021',
    tags: ['female', 'male'],
    metrics: {
      'Rotation in-plane': '±45˚',
      'Rotation out-of-plane': 'Yaw: ±45˚ / Pitch: ±45˚',
      'Min object width': '62 pixels',
      GFlops: '0.094',
      MParams: '2.138',
      'Source framework': 'Caffe*',
    },
    inputs: {
      C: 'number of channels',
      H: 'image height',
      W: 'image width',
    },
    model_id: 2,
  },
  {
    id: 4,
    name: 'Vehicle Attribute Recognition',
    describe:
      'This model presents a vehicle attributes classification algorithm for a traffic analysis scenario.',
    imageUrl: 'https://docs.openvino.ai/2019_R1/vehicle-attributes-recognition-barrier-0039-1.png',
    inputDescribe: 'Image, name: input, shape: 1, 3, 72, 72 in 1, C, H, W format, where:',
    createdAt: '7/3/2021',
    tags: ['white', 'gray', 'yellow', 'red', 'green', 'blue', 'black', 'car', 'bus', 'truck', 'van'],
    metrics: {
      'Car pose': 'Front facing cars',
      'Occlusion coverage': '<50%',
      'Min object width': '72 pixels',
      'Supported colors': 'White, gray, yellow, red, green, blue, black',
      'Supported types': 'Car, bus, truck, van',
      GFlops: '0.126',
      MParams: '0.626',
      'Source framework': 'Caffe*',
    },
    inputs: {
      C: 'number of channels',
      H: 'image height',
      W: 'image width',
    },
    model_id: 4,
  },
  {
    id: 5,
    name: 'Pedestrian and Vehicle Detection',
    describe: 'Pedestrian and vehicle detection network based on MobileNet v1.0 + SSD.',
    imageUrl: 'https://docs.openvino.ai/2019_R1/pedestrian-and-vehicle-detector-adas-0001.png',
    inputDescribe: 'Image, name: input, shape: 1, 3, 384, 672 in B, C, H, W format, where:',
    createdAt: '7/3/2021',
    tags: ['vehicle', 'pedestrian'],
    metrics: {
      'AP for pedestrians': '88%',
      'AP for vehicles': '90%',
      'Target pedestrian size': '60x120 pixels',
      'Target vehicle size': '40x30 pixels',
      GFlops: '3.974',
      MParams: '1.650',
      'Source framework': 'Caffe*',
    },
    inputs: {
      B: 'batch size',
      C: 'number of channels',
      H: 'image height',
      W: 'image width',
    },
    model_id: 5,
    create_name: '',
  },
  {
    id: 6,
    name: 'Person Detection',
    describe:
      'This is a pedestrian detector for the Retail scenario. It is based on MobileNetV2-like backbone that includes depth-wise convolutions to reduce the amount of computation for the 3x3 convolution block. The single SSD head from 1/16 scale feature map has 12 clustered prior boxes.',
    imageUrl: 'https://docs.openvino.ai/2019_R1/person-detection-retail-0013.png',
    inputDescribe: 'Image, name: input, shape: 1, 3, 320, 544 in B, C, H, W format, where:',
    createdAt: '7/3/2021',
    tags: ['person'],
    metrics: {
      AP: '88.62%',
      'Pose coverage': 'Standing upright, parallel to image plane',
      'Support of occluded pedestrians': 'YES',
      'Occlusion coverage': '<50%',
      'Min pedestrian height': '100 pixels (on 1080p)',
      GFlops: '2.300',
      MParams: '0.723',
      'Source framework': 'Caffe*',
    },
    inputs: {
      B: 'batch size',
      C: 'number of channels',
      H: 'image height',
      W: 'image width',
    },
    model_id: 6,
    create_name: '',
  },
];
