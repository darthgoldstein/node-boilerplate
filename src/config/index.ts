import ConfigUtils from "../utils/config.utils";

const config = {
  baseUrl: ConfigUtils.string('BASE_URL', 'http://localhost:3005'),
  port: ConfigUtils.number('PORT', 3005),
}

export default config;