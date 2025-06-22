import { motion, AnimatePresence } from "framer-motion";

export type Project = {
  title: string;
  description: string;
  image: string;
};

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#1D1D1D] rounded-[12px] p-8 max-w-[800px] w-[90%] relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-[1px] right-4 text-white text-2xl font-bold hover:text-[#18BBD8]"
            >
              ×
            </button>
            <img
              src={project.image}
              alt={project.title}
              className="rounded mb-6"
            />
            <h3 className="text-[26px] font-bold text-[#18BBD8] mb-2">
              {project.title}
            </h3>
            <p className="text-[#E0E0E0]">{project.description}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
