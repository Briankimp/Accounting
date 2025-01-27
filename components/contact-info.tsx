import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="mb-6 text-3xl font-bold text-logofBlue">Contact Information</h2>
      <div className="space-y-6">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-start gap-4">
          <MapPin className="mt-1 h-5 w-5 text-logofBlue" />
          <div>
            <h3 className="font-semibold">Office Address</h3>
            <p className="text-gray-600">
              LOGOF ENTERPRISES
              <br />
              Nairobi, Kenya
            </p>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-start gap-4">
          <Phone className="mt-1 h-5 w-5 text-logofBlue" />
          <div>
            <h3 className="font-semibold">Phone Number</h3>
            <p className="text-gray-600">+254768025476</p>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-start gap-4">
          <Mail className="mt-1 h-5 w-5 text-logofBlue" />
          <div>
            <h3 className="font-semibold">Email Address</h3>
            <p className="text-gray-600">logofenterprises@gmail.com</p>
          </div>
        </motion.div>
      </div>
      <div className="mt-8">
        <Image
          src="https://maps.googleapis.com/maps/api/staticmap?center=Nairobi,Kenya&zoom=12&size=600x300&key=YOUR_GOOGLE_MAPS_API_KEY"
          alt="Map of office location"
          width={600}
          height={300}
          className="rounded-lg"
        />
      </div>
    </motion.div>
  )
}

