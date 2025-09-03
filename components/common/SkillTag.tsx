interface SkillTagProps {
  skill: string;
}

const SkillTag = ({ skill }: SkillTagProps) => {
  return (
    <div className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg text-sm font-medium">
      {skill}
    </div>
  );
};

export default SkillTag;
